import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/constants/route_path.dart';

class OnBoardingBottomNavigation extends StatelessWidget {
  const OnBoardingBottomNavigation({super.key, required this.onTap, required this.index, required this.nextButtonColor, required this.indicator});

  final VoidCallback onTap;
  final int index;
  final Color nextButtonColor;
  final List<Widget> indicator;
  @override
  Widget build(BuildContext context) {
    // double heightScreen = MediaQuery.of(context).size.height;
    return  Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: indicator
        ),
        ClipRRect(
          borderRadius: const BorderRadius.all(Radius.circular(59)),
          child: Container(
              color: nextButtonColor,
              child:GestureDetector(
                  onTap: (){
                    if(index == 2){
                      context.pushReplacement(RoutePath.auth);
                    }else{
                      onTap();
                    }
                  },
                  child: const IconButton(onPressed: null,color:Color.fromRGBO(119, 259, 206, 1), icon: Icon(Icons.chevron_right))),
          ),
        )
      ],
    );
  }
}
