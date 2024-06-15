import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../auth/presentation/views/login_view.dart';
import '../../auth/presentation/views/signup_view.dart';
import '../../auth/presentation/views/starting_view.dart';
import '../../global/widgets/scaffold_with_nested_navigation.dart';
import '../../goal/presentation/views/define_goal.dart';
import '../../goal/presentation/views/goals_view.dart';
import '../../on_boarding/presentation/views/on_boarding_container.dart';
import '../constants/route_path.dart';


class AppRouter {
  //Singleton instance
  static final AppRouter _instance = AppRouter._internal();
  //Go router instance
  static late final GoRouter goRouter;
  // Getter for the singleton instance
  static AppRouter get instance => _instance;

  //Generate private key  for navigator with a label
  static GlobalKey<NavigatorState> generateKey(String label) {
    return GlobalKey<NavigatorState>(debugLabel: label);
  }

  factory AppRouter() {
    return _instance;
  }
  AppRouter._internal() {
    goRouter = GoRouter(
      debugLogDiagnostics: true,
      navigatorKey: generateKey('root'),
      initialLocation: RoutePath.onboarding,
      routes: [
        GoRoute(
            path: RoutePath.onboarding,
            pageBuilder: (BuildContext context, GoRouterState state) {
              return MaterialPage(
                key: state.pageKey,
                child: const OnBoardingContainer(),
              );
            }),
        GoRoute(
            path: RoutePath.defineGoal,
            pageBuilder: (BuildContext context, GoRouterState state) {
              return MaterialPage(
                key: state.pageKey,
                child: const DefineGoal(),
              );
            }),
        GoRoute(
          path: RoutePath.auth,
          pageBuilder: (BuildContext context, GoRouterState state) {
            return MaterialPage(
              key: state.pageKey,
              child: const StartingView(),
            );
          },
          routes: [
            GoRoute(
                path: RoutePath.login,
                pageBuilder: (BuildContext context, GoRouterState state) {
                  return MaterialPage(
                    key: state.pageKey,
                    child: const LoginView(),
                  );
                }),
            GoRoute(
                path: RoutePath.signup,
                pageBuilder: (BuildContext context, GoRouterState state) {
                  return MaterialPage(
                    key: state.pageKey,
                    child: const SignupView(),
                  );
                }),
          ],
        ),
        StatefulShellRoute.indexedStack(
          branches: [
            StatefulShellBranch(
              navigatorKey: generateKey('home'),
              routes: [
                GoRoute(
                    path: RoutePath.home,
                    pageBuilder: (BuildContext context, GoRouterState state) {
                      return MaterialPage(
                          key: state.pageKey, child: const Text('home screen'));
                    })
              ],
            ),
            StatefulShellBranch(
              navigatorKey: generateKey('statistics'),
              routes: [
                GoRoute(
                    path: RoutePath.statistics,
                    pageBuilder: (BuildContext context, GoRouterState state) {
                      return MaterialPage(
                          key: state.pageKey,
                          child: const Text('stats screen'));
                    })
              ],
            ),
            StatefulShellBranch(
              navigatorKey: generateKey('goals'),
              routes: [
                GoRoute(
                    path: RoutePath.goals,
                    pageBuilder: (BuildContext context, GoRouterState state) {
                      return MaterialPage(
                          key: state.pageKey,
                          child: const GoalsView());
                    })
              ],
            ),
            StatefulShellBranch(
              navigatorKey: generateKey('profile'),
              routes: [
                GoRoute(
                    path: RoutePath.profile,
                    pageBuilder: (BuildContext context, GoRouterState state) {
                      return MaterialPage(
                          key: state.pageKey,
                          child: const Text('profile screen'));
                    })
              ],
            ),
          ],
          builder: (BuildContext context, GoRouterState state,
              StatefulNavigationShell navigationShell) {
            return ScaffoldWithNestedNavigation(
              child: navigationShell,
            );
          },
        ),
      ],
    );
  }
}
