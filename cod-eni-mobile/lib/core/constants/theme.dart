import 'package:flutter/material.dart';

const textColor = Color(0xD82C2C2C);
const backgroundColor = Color(0xFFfdfcf4);
const primaryColor = Color(0xFF77FFCE);
const primaryFgColor = Color(0xFF1d1a05);
const secondaryColor = Color(0xFFFCFF77);
const secondaryFgColor = Color(0xFF1d1a05);
const accentColor = Color(0xFF77CEFF);
const accentFgColor = Color(0xFF1d1a05);

const colorScheme = ColorScheme(
  brightness: Brightness.light,
  background: backgroundColor,
  onBackground: textColor,
  primary: primaryColor,
  onPrimary: primaryFgColor,
  secondary: secondaryColor,
  onSecondary: secondaryFgColor,
  tertiary: accentColor,
  onTertiary: accentFgColor,
  surface: backgroundColor,
  onSurface: textColor,
  error: Brightness.light == Brightness.light ? Color(0xffB3261E) : Color(0xffF2B8B5),
  onError: Brightness.light == Brightness.light ? Color(0xffFFFFFF) : Color(0xff601410),
);
abstract class AppThemes {
   static final lightTheme = ThemeData(
        colorScheme: colorScheme,
        useMaterial3: true,
   );
   static final darkTheme = ThemeData(
     colorScheme: colorScheme,
     useMaterial3: true,
   );
}