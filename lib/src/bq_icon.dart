// ignore_for_file: use_super_parameters

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// A unified SVG icon widget for all bqicons icon sets.
///
/// Usage:
/// ```dart
/// BqIcon(SolarOutlineIcons.accessibility, size: 24, color: Colors.blue)
/// BqIcon(MicionsInterfaceLine.add_circle, size: 32)
/// BqIcon(WaveOvalInterface.heart, color: Colors.red)
/// BqIcon(SoftwareMansionCurvedLinee.bell, size: 20)
/// ```
class BqIcon extends SvgPicture {
  BqIcon(
    String assetName, {
    super.key,
    double? size = 35.0,
    Color? color,
    ColorFilter? colorFilter,
  }) : super.asset(
         assetName,
         package: 'bqicons',
         height: size,
         width: size,
         colorFilter: color != null
             ? ColorFilter.mode(color, BlendMode.srcIn)
             : colorFilter,
       );
}
