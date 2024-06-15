  import 'package:flutter/material.dart';

import 'goal_item.dart';


  class GoalsContainer extends StatelessWidget {
    const GoalsContainer({super.key});

    @override
    Widget build(BuildContext context) {
      return SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Padding(
              padding: EdgeInsets.only(bottom: 16),
              child: Text("Cinq (05) objectifs enregistrer"),
            ),
            Padding(
              padding: EdgeInsets.all(8.0),
              child: GoalItem(title: 'MacBook Pro M3',reached: 250000,goal: 500000, color: Theme.of(context).colorScheme.tertiary,),
            ),

            Padding(
              padding: EdgeInsets.all(8.0),
              child: GoalItem(title: 'Iphone 15 Pro',reached: 300000,goal: 500000,color: Theme.of(context).colorScheme.primary),
            ),
            Padding(
              padding: EdgeInsets.all(8.0),
              child: GoalItem(title: 'Magic keyboard',reached: 100000,goal: 500000,color: Theme.of(context).colorScheme.secondary),
            ),
          ],
        ),
      );
    }
  }
