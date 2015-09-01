# hands-on-react

## STEP 1

Move all html markup to jsx components, you'll find comments inside index.html
which define which component the markup is related to, for example:

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
