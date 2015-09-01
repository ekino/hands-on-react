# HANDS-ON REACT

[check diff with previous step](https://github.com/plouc/hands-on-react/compare/step-2...step-3)

```sh
git checkout step-3
```

## Step 3

- using **events**
- using component **state**

The goal of this exercise is to get familiar with events and states, you'll see two
new methods on the **App** component, ``constructor`` and ``onPackSelect``, the constructor
initialize the component state:

```javascript
this.state = {
    packages: packages,
    current:  packages[0]
};
```

``packages`` is used to store the list of available packages and ``current`` is used
to store the current viewed package in **PackageInfo** component.

``onPackSelect`` is a method which take a package as argument and set the current
package to this package.

You'll have to make the current package change when we click on a **PackageListItem**
component.

[< previous step](https://github.com/plouc/hands-on-react/tree/step-2) | [next step >](https://github.com/plouc/hands-on-react/tree/step-4)
