import 'package:flutter/material.dart';
import '../core/constants/theme.dart';
import '../core/route/app_router.dart';

class CodEni extends StatelessWidget {
  const CodEni({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: AppRouter.goRouter,
      theme: AppThemes.lightTheme,
      darkTheme: AppThemes.darkTheme,
      themeMode: ThemeMode.system,
      debugShowCheckedModeBanner: false,
    );
  }
}
