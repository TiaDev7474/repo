import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../core/constants/route_path.dart';


class OnBoardingTopNavigation extends StatelessWidget {
  const OnBoardingTopNavigation({super.key, required this.skip});
  final bool skip;

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: const EdgeInsets.all(0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              ".Poketra",
              style: TextStyle(
                  color: Colors.black87,
                  fontWeight: FontWeight.bold,
                  fontSize: 35),
            ),
            TextButton(
                onPressed: (){
                  context.push(RoutePath.auth);
                },
                child: const Text(
                  "skip",
                  style: TextStyle(color: Colors.black54, fontSize: 20),
                ))
          ],
        ));
  }
}
