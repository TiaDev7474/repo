import 'package:cod_eni_mobile/app/codeni.dart';
import 'package:flutter/material.dart';
import 'core/route/app_router.dart';
import 'package:cod_eni_mobile/core/config/injection.dart' as di;

void main()async{
  WidgetsFlutterBinding.ensureInitialized();
  await di.init();
  AppRouter.instance;
  runApp(const CodEni());
}