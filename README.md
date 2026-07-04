<div align="center">

<h1>
  <img src="https://img.shields.io/badge/BQ-Icons-6C63FF?style=for-the-badge&logoColor=white" alt="bqicons" height="42"/>
</h1>

<p>
  <strong>A beautiful, unified Flutter icon package</strong><br/>
  5,000+ hand-crafted SVG icons across 12 premium icon sets — all in one package.
</p>

<p>
  <a href="https://pub.dev/packages/bqicons">
    <img src="https://img.shields.io/pub/v/bqicons?color=6C63FF&label=pub.dev&style=flat-square" alt="pub.dev"/>
  </a>
  <a href="https://pub.dev/packages/bqicons">
    <img src="https://img.shields.io/pub/likes/bqicons?color=FF6584&style=flat-square&label=likes" alt="likes"/>
  </a>
  <img src="https://img.shields.io/badge/icons-5%2C004-43D09B?style=flat-square" alt="5004 icons"/>
  <img src="https://img.shields.io/badge/icon_sets-12-FF6584?style=flat-square" alt="12 sets"/>
  <img src="https://img.shields.io/badge/Flutter-%3E%3D1.17-54C5F8?style=flat-square&logo=flutter&logoColor=white" alt="flutter"/>
  <img src="https://img.shields.io/badge/SVG-Powered-orange?style=flat-square" alt="svg"/>
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="license"/>
</p>

</div>

---

## ✨ Features

- 🎨 **5,004 SVG icons** across **12 curated icon sets**
- 🔧 **Single unified widget** — `BqIcon(...)` works for all sets
- 🌈 **Full color control** — tint any icon with any `Color`
- 📐 **Scalable** — SVG-based, crisp at any size
- ⚡ **Zero fuss** — just drop in `BqIcon` and go

---

## 📦 Installation

Add `bqicons` to your `pubspec.yaml`:

```yaml
dependencies:
  bqicons: ^0.0.1
```

Then run:

```bash
flutter pub get
```

---

## 🚀 Usage

Import the package:

```dart
import 'package:bqicons/bqicons.dart';
```

Use the `BqIcon` widget:

```dart
// Basic usage
BqIcon(SolarOutline.accessibility)

// With custom size
BqIcon(DazzleLine.home, size: 32)

// With color tint
BqIcon(ScarlabOvalLine.heart, size: 28, color: Colors.red)

// Inside a Row
Row(
  children: [
    BqIcon(MicionsInterfaceLine.add_circle, size: 24, color: Colors.blue),
    SizedBox(width: 8),
    Text('Add Item'),
  ],
)

// As a button icon
IconButton(
  icon: BqIcon(SoftwareMansionCurvedLine.bell, size: 24),
  onPressed: () {},
)
```

### `BqIcon` Widget Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `assetName` | `String` | required | The icon path constant (e.g. `SolarOutline.home`) |
| `size` | `double?` | `35.0` | Width and height of the icon |
| `color` | `Color?` | `null` | Tint color applied via `BlendMode.srcIn` |
| `colorFilter` | `ColorFilter?` | `null` | Advanced custom color filter |

---

## 🗂️ Icon Sets

| Icon Set Class | Folder | Count | Style |
|---|---|---|---|
| `SolarOutline` | `solar-outline-icons` | 1,244 | Outline |
| `DazzleLine` | `dazzle-line-icons` | 1,711 | Line |
| `ScarlabOvalLine` | `scarlab-oval-line-icons` | 441 | Oval Line |
| `ScarlabSolidOval` | `scarlab-solid-oval-interface-icons` | 312 | Solid Oval |
| `SoftwareMansionBroken` | `software-mansion-broken-icons` | 275 | Broken |
| `SoftwareMansionCurvedLine` | `software-mansion-curved-line-icons` | 275 | Curved Line |
| `WaveOvalInterface` | `wave-oval-interface-icons` | 120 | Oval |
| `StartUniversalTinyOval` | `start-universal-tiny-oval-icons` | 119 | Tiny Oval |
| `GenericaTinyInterface` | `generica-tiny-interface-icons` | 257 | Tiny |
| `MicionsInterfaceLine` | `micions-interface-line-icons` | 87 | Line |
| `MicionsInterface` | `micions-interface-icons` | 72 | Filled |
| `IconwrapFilledInterface` | `iconwrap-filled-interface-icons` | 91 | Filled |

---

## 💡 Examples

<table>
<tr>
<td>

**Navigation bar**

```dart
NavigationBar(
  destinations: [
    NavigationDestination(
      icon: BqIcon(SolarOutline.home, size: 24),
      label: 'Home',
    ),
    NavigationDestination(
      icon: BqIcon(SolarOutline.user, size: 24),
      label: 'Profile',
    ),
  ],
)
```

</td>
<td>

**Colored icon grid**

```dart
GridView.count(
  crossAxisCount: 4,
  children: [
    BqIcon(DazzleLine.star,   color: Colors.amber),
    BqIcon(DazzleLine.heart,  color: Colors.red),
    BqIcon(DazzleLine.cloud,  color: Colors.blue),
    BqIcon(DazzleLine.bolt,   color: Colors.orange),
  ],
)
```

</td>
</tr>
</table>

---

## 📁 Project Structure

```
bqicons/
├── lib/
│   ├── bqicons.dart            ← Main library export
│   └── src/
│       ├── bq_icon.dart        ← BqIcon widget
│       ├── solar_outline_icons.dart
│       ├── dazzle-line-icons.dart
│       └── ...                 ← 12 icon set files
└── assets/
    └── icons/
        ├── solar-outline-icons/    (1,244 SVGs)
        ├── dazzle-line-icons/      (1,711 SVGs)
        └── ...                     (12 folders)
```

---

## 🔗 Dependencies

| Package | Purpose |
|---------|---------|
| [`flutter_svg`](https://pub.dev/packages/flutter_svg) | Renders SVG icon assets |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Made with ❤️ for the Flutter community</sub>
</div>
