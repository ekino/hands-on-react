# hands-on-react

## STEP 1

- jsx basics

```sh
git checkout step-1
```

Move all html markup to react components, you'll find comments inside index.html
which define the component the markup is related to, for example:

```html
<!-- begin Header.jsx -->
<header class="app_header">
    Hands-On React!
</header>
<!-- end Header.jsx -->
```

It means this markup should go inside `src/js/components/Header.jsx`:

```javascript
class Header extends Component {
    render() {
        return (
            <header className="app_header">
                Hands-On React!
            </header>
        );
    }
}
```


## STEP 2

- components props
- props validation
- component lists

```sh
git checkout step-2
```

### STEP 2-A

You have an example of how to define required component props in `Header.jsx`, and how they're passed to it in `App.jsx`.
Change **Footer** component to make it configurable via props.

### STEP 2-B

You'll see the **Controls** component now uses **Control** component and loop through an array in order to generate the controls.
Change **PackageList** component to replicate this behavior.
