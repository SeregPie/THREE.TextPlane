# THREE.TextPlane

`class THREE.TextPlane extends THREE.Mesh`

Optimally displays the text as a plane.

## demo

[Try it out!](https://seregpie.github.io/aframe-text-plane/)

## dependencies

- [THREE.TextTexture](https://github.com/SeregPie/THREE.TextTexture)

## setup

### npm

```shell
npm i @seregpie/three.text-plane
```

---

```javascript
import TextPlane from '@seregpie/three.text-plane';
```

### browser

```html
<script src="https://unpkg.com/three"></script>
<script src="https://unpkg.com/@seregpie/three.text-texture"></script>
<script src="https://unpkg.com/@seregpie/three.text-plane"></script>
```

The class is globally available as `THREE.TextPlane`.

## usage

```javascript
let instance = new THREE.TextPlane({
  alignment: 'left',
  color: '#24ff00',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: 8,
  fontStyle: 'italic',
  text: [
    'Twinkle, twinkle, little star,',
    'How I wonder what you are!',
    'Up above the world so high,',
    'Like a diamond in the sky.',
  ].join('\n'),
});
scene.add(instance);
```

---

Update the plane.

```javascript
instance.fontFamily = 'Arial, Helvetica, sans-serif';
instance.fontStyle = 'normal';
instance.text = [
  'When this blazing sun is gone,',
  'When he nothing shines upon,',
  'Then you show your little light,',
  'Twinkle, twinkle, through the night.',
].join('\n');
```

## members

### constructor

```
new THREE.TextPlane({
  alignment: 'center',
  backgroundColor: 'rgba(0,0,0,0)',
  color: '#fff',
  fontFamily: 'sans-serif',
  fontSize: 1,
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  lineGap: 0.25,
  padding: 0.5,
  strokeColor: '#fff',
  strokeWidth: 0,
  text: '',
}, material)
```

| argument | description |
| ---: | :--- |
| `alignment` | The horizontal text alignment. Possible values are `'center'`, `'left'` and `'right'`. |
| `backgroundColor` | The background color. |
| `color` | The color. |
| `fontFamily` | The font family. |
| `fontSize` | The font size. |
| `fontStyle` | The font style. |
| `fontVariant` | The font variant. |
| `fontWeight` | The font weight. |
| `lineGap` | The vertical distance between the text lines. The value is relative to the font size. |
| `padding` | The space around the text. The value is relative to the font size. |
| `strokeColor` | The stroke color. |
| `strokeWidth` | The stroke width. The value is relative to the font size. |
| `text` | The text. |
| `material` | An instance of `THREE.Material`. If not provided, a default instance will be created. |

### properties

`.isTextPlane = true`

Used to check whether this is an instance of `TextPlane`.

---

`.text`

`.fontFamily`

`.fontSize`

`.fontWeight`

`.fontVariant`

`.fontStyle`

`.color`

`.strokeWidth`

`.strokeColor`

`.alignment`

`.lineGap`

`.padding`

`.backgroundColor`

### methods

`.dispose()`

Disposes the geometry, the texture and the material.
