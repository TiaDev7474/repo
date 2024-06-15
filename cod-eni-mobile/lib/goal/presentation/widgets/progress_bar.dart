import 'package:flutter/material.dart';

class ProgressBar extends StatelessWidget {
  const ProgressBar({super.key, required this.progress, required this.color});
  final double progress;
  final Color color;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 65.0,
      height: 50.0,
      padding: const EdgeInsets.only(right: 16),
      decoration: const BoxDecoration(color: Colors.transparent, shape: BoxShape.circle),
      child: Stack(alignment: Alignment.center, children: [
        Positioned.fill(
          child: CircularProgressIndicator(
            backgroundColor: const Color.fromRGBO(187, 187, 187, 1),
            value: progress,
            strokeWidth: 4.0,
            valueColor: AlwaysStoppedAnimation<Color>(color),
          ),
        ),
        // Text(
        //   "${(progress * 100).toInt()}%",
        //   style: TextStyle(
        //       fontSize: 13.0, color: Theme.of(context).colorScheme.tertiary, fontWeight: FontWeight.w600),
        // ),
      ]),
    );;
  }
}
