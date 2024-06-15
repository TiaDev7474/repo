import 'package:cod_eni_mobile/goal/presentation/widgets/progress_bar.dart';
import 'package:flutter/material.dart';


class GoalItem extends StatelessWidget {
  const GoalItem({super.key, required this.title, required this.goal, required this.reached, required this.color});
  final String title;
  final double goal;
  final double reached;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Padding(
        padding: const EdgeInsets.all(8),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  ProgressBar(progress: (reached / goal), color: color,),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(bottom: 6),
                        child: Text(title,style: Theme.of(context).textTheme.titleSmall?.copyWith(fontSize:16),),
                      ),
                      Text("${reached * 100  / goal} atteint",style: Theme.of(context).textTheme.titleSmall?.copyWith(fontSize:16,fontWeight: FontWeight.normal),)
                    ],
                  )
                ],
              ),
              Text("MGA $reached/$goal",style: Theme.of(context).textTheme.labelMedium,)
            ],
        ),
      ),
    );
  }
}
