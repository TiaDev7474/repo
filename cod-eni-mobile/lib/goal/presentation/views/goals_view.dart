import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../core/constants/route_path.dart';
import '../widgets/gloals_container.dart';

class GoalsView extends StatelessWidget {
  const GoalsView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          onPressed: (){
            context.pushReplacement(RoutePath.onboarding);
          },
          icon: const Icon(
            Icons.chevron_left,
            size: 24.0,
            // color: Colors.blue,
          ),
        ),
        title: Text("Objectif", style: Theme.of(context).textTheme.headlineMedium),
      ),
      body: Stack(
        children: [
          Container(
            color: const Color.fromRGBO(252, 250, 241, 1),
            child: const Column(
              children: [
                Padding(
                  padding: EdgeInsets.all(10.0),
                  child: GoalsContainer(),
                ),
              ],
            ),
          ),
          Positioned(
            right: 20,
            bottom: 20,
            child:ClipRRect(
                  borderRadius: const BorderRadius.all(Radius.circular(59)),
                  child: Container(
                  color: const Color.fromRGBO(119, 255, 206, 1),
                  child:GestureDetector(
                  onTap: (){
                    context.pushReplacement(RoutePath.defineGoal);
                  },
                  child: const IconButton(onPressed: null,color:Colors.black, icon: Icon(Icons.add))),
                  ),
            )
            ),
        ]
      ),
    );
  }
}
