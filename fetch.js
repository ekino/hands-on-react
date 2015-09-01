var request        = require('superagent-bluebird-promise');
var Promise        = require('bluebird');
var chalk          = require('chalk');
var fs             = Promise.promisifyAll(require('fs'));
var path           = require('path');
var config         = require('./fetch.config');

var githubApiUrl   = 'https://api.github.com';
var githubRawUrl   = 'https://raw.githubusercontent.com';
var githubApiToken = 'PUT_YOUR_GITHUB_API_TOKEN_HERE';

var dataDir        = 'build/data';


console.log(chalk.yellow('fetching github repository info'));
Promise.all(config.projects.map(function (project) {
    return request.get(githubApiUrl + '/repos/' + project)
        .query({ access_token: githubApiToken })
        .then(function (repoRes) {
            var repoInfo = repoRes.body;

            console.log(chalk.green('> fetched github info for', repoInfo.full_name));

            return request.get(githubRawUrl + '/' + repoInfo.full_name + '/' + repoInfo.default_branch + '/package.json')
                .query({ access_token: githubApiToken })
                .then(function (packageRes) {
                    var packageInfo = JSON.parse(packageRes.text);

                    console.log(chalk.green('> fetched package.json for', packageInfo.name));

                    return {
                        name:           packageInfo.name,
                        version:        packageInfo.version,
                        description:    packageInfo.description,
                        keywords:       packageInfo.keywords,
                        githubRepo:     repoInfo.html_url,
                        githubStars:    repoInfo.stargazers_count,
                        githubWatchers: repoInfo.watchers,
                        githubForks:    repoInfo.forks,
                        homepage:       (repoInfo.homepage !== null && repoInfo !== '') ? repoInfo.homepage : null
                    };
                })
            ;
        })
        .then(function (combinedInfo) {
            return fs.writeFileAsync(path.join(dataDir, combinedInfo.name + '.json'), JSON.stringify(combinedInfo, null, 4))
                .then(function () {
                    console.log(chalk.green('> generated', combinedInfo.name + '.json'));

                    return combinedInfo;
                })
                .catch(function (err) {
                    console.error(clalk.red('an error occurred while writing: ' + combinedInfo.name + '.json'));
                })
            ;
        })
    ;
}))
    .then(function (projects) {
        var indexInfo = [];

        projects.forEach(function (project) {
            indexInfo.push({
                name:     project.name,
                version:  project.version,
                keywords: project.keywords
            });
        });

        return fs.writeFileAsync(path.join(dataDir, 'index.json'), JSON.stringify(indexInfo, null, 4))
            .then(function () {
                console.log(chalk.green('> generated', 'index.json'));
                console.log(chalk.green('>>> DONE!'));
            })
            .catch(function (err) {
                console.error(clalk.red('an error occurred while writing index.json'));
            })
        ;
    })
;
