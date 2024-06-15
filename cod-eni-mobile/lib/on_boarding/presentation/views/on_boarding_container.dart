import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';


import '../../../core/constants/route_path.dart';
import '../../../core/constants/theme.dart';
import 'on_boarding.dart';

class OnBoardingContainer extends StatefulWidget {
  const OnBoardingContainer({super.key});

  @override
  State<OnBoardingContainer> createState() => _OnBoardingContainerState();
}

class _OnBoardingContainerState extends State<OnBoardingContainer> {
  final List<Map<String, dynamic>> _pages = [
    {
      'color': secondaryColor,
      'title': 'Apprener à gérer votre argent intelligement',
      'image': 'assets/onboardingfirst.png',
      'nextButtonColor': primaryColor,
      'description':
          'Notre application vous permet de suivre vos dépenses et de créer des budgets personnalisés pour mieux gérer votre argent',
      'skip': true
    },
    {
      'color': accentColor,
      'title': 'Initiez-vous à l’éducation financière',
      'image': 'assets/onboardingsecond.png',
      'nextButtonColor': secondaryColor,
      'description':
          'Découvrez des astuces pratiques et  des conseils pour encourager l\'épargne, d\'atteindre vos objectifs financiers avec succès.',
      'skip': true
    },
    {
      'color': primaryColor,
      'title': 'Obtenir des rapports de  vos dépenses facilement',
      'image': 'assets/onboardinglast.png',
      'nextButtonColor': accentColor,
      'description':
          'Poketra vous permet de suivre vos dépenses en détail et de générer des rapports hebdomadaires ou mensuels pour une meilleure compréhension de vos finances',
      'skip': false
    },
  ];

  final PageController _pageController = PageController();
  int _activePage = 0;

  void onNextPage() {
    if (_activePage < _pages.length - 1) {
      _pageController.nextPage(
        duration: const Duration(milliseconds: 500),
        curve: Curves.fastEaseInToSlowEaseOut,
      );
    } else {
      GoRouter.of(context).pushReplacement(RoutePath.auth);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(children: [
        PageView.builder(
            controller: _pageController,
            itemCount: _pages.length,
            scrollBehavior: AppScrollBehavior(),
            onPageChanged: (int page) {
              setState(() {
                _activePage = page;
              });
            },
            itemBuilder: (context, index) {
              return OnBoarding(
                indicator: _buildIndicator(),
                color: _pages[index]['color'],
                index: index,
                onTab: onNextPage,
                skip: _pages[index]['skip'],
                image: _pages[index]['image'],
                title: _pages[index]['title'],
                description: _pages[index]['description'],
                nextButtonColor: _pages[index]['nextButtonColor'],
              );
            }),
      ]),
    );
  }

  List<Widget> _buildIndicator() {
    final indicators = <Widget>[];

    for (var i = 0; i < _pages.length; i++) {
      if (_activePage == i) {
        indicators.add(_indicatorsTrue());
      } else {
        indicators.add(_indicatorsFalse());
      }
    }
    return indicators;
  }

  Widget _indicatorsTrue() {
    final String color;
    if (_activePage == 0) {
      color = '#ffe24e';
    } else if (_activePage == 1) {
      color = '#a3e4f1';
    } else {
      color = '#31b77a';
    }

    return AnimatedContainer(
      duration: const Duration(microseconds: 300),
      height: 6,
      width: 42,
      margin: const EdgeInsets.only(right: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(50),
        color: Colors.black,
      ),
    );
  }

  Widget _indicatorsFalse() {
    return AnimatedContainer(
      duration: const Duration(microseconds: 300),
      height: 8,
      width: 8,
      margin: const EdgeInsets.only(right: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(50),
        color: Colors.black,
      ),
    );
  }
}

class AppScrollBehavior extends MaterialScrollBehavior {
  @override
  Set<PointerDeviceKind> get dragDevices => {
        PointerDeviceKind.touch,
        PointerDeviceKind.mouse,
      };
}

// import "package:flutter/material.dart";
// import "package:poketra/on_boarding/presentation/index.dart";
//
// class OnBoardingContainer extends StatefulWidget {
//   const OnBoardingContainer({super.key});
//
//   @override
//   State<OnBoardingContainer> createState() => _OnBoardingContainerState();
// }
//
// class _OnBoardingContainerState extends State<OnBoardingContainer> {
//   @override
//   Widget build(BuildContext context) {
//     List<Widget> items = [Container(color: Colors.red,),FirstOnBoarding(),];
//     void _reverse() {
//       setState(() {
//         items = items.reversed.toList();
//       });
//     }
//     return Scaffold(
//       body: PageView.custom(
//         childrenDelegate: SliverChildBuilderDelegate(
//             (context,index){
//               return Center(
//                 child: items[index],
//               );
//             },
//           childCount: items.length,
//           // findChildIndexCallback: (Key key) {
//           //   final Key valueKey = key;
//           //   final String data = valueKey.value;
//           //   return items.indexOf(data as Widget);
//           // },
//         ),
//
//       ),
//     );
//   }
// }
//
// // class KeepAlive extends StatefulWidget {
// //   const KeepAlive({Key key, this.data}) : super(key: key);
// //
// //   final String data;
// //
// //   @override
// //   _KeepAliveState createState() => _KeepAliveState();
// // }
// //
// // class _KeepAliveState extends State<KeepAlive>
// //     with AutomaticKeepAliveClientMixin {
// //   @override
// //   bool get wantKeepAlive => true;
// //
// //   @override
// //   Widget build(BuildContext context) {
// //     super.build(context);
// //     return Center(child: Text('Page ${widget.data}'));
// //   }
// // }
