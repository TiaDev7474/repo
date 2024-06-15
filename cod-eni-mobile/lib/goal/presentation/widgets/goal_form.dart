import 'package:flutter/material.dart';

class GoalForm extends StatelessWidget {
  const GoalForm({super.key});

  @override
  Widget build(BuildContext context) {
    return Form(
        child: Padding(
          padding: const EdgeInsets.all(10),
          child: Column(
            children: [
               Column(
                 crossAxisAlignment: CrossAxisAlignment.start,
                 children: [
                   Text("Nom de l'Objectif", style: Theme.of(context).textTheme.titleLarge,),
                   const SizedBox(
                     height: 12.0,
                   ),
                   TextFormField(
                     decoration: const InputDecoration(
                         labelText: "ex: Champions League Final",
                         border: InputBorder.none,
                         fillColor: Color.fromRGBO(212, 231, 241, 0.37),
                         filled: true
                     ),
                   )
                 ],
               )
            ],
          ),
        )
    );
  }
}
