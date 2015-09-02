# HANDS-ON REACT

```sh
git checkout step-1
```

## Step 1

- **jsx** basics

### Step 1.A

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

### Step 1.B

Perhaps you noticed, there's no **Footer** component,
creates it (hint: it's really similar to **Header** :))

[next step >](https://github.com/ekino/hands-on-react/tree/step-2)
