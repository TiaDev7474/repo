import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/constants/route_path.dart';
import '../widgets/goal_form.dart';



class DefineGoal extends StatelessWidget {
  const DefineGoal({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromRGBO(252, 250, 235, 1),
      appBar: AppBar(
        backgroundColor: const Color.fromRGBO(252, 250, 235, 1),
        leading: IconButton(
          onPressed: (){
            context.pushReplacement(RoutePath.goals);
          },
          icon: const Icon(
            Icons.chevron_left,
            size: 24.0,
          ),
        ),
        title: Text("Définir un  Objectif", style: Theme.of(context).textTheme.headlineMedium),
      ),
      body: Container(
        color: Colors.white,
        child: const GoalForm()
      )
    );
  }
}
