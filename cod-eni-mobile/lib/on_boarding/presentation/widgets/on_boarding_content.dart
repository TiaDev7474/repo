import 'package:flutter/material.dart';

class OnBoardingContent extends StatelessWidget {
  const OnBoardingContent(
      {super.key,
      required this.image,
      required this.title,
      required this.description,
      required this.index});

  final String image;
  final String title;
  final String description;
  final int index;

  @override
  Widget build(BuildContext context) {
    double heightScreen = MediaQuery.of(context).size.height;
    return index % 2 != 0
        ? Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: Theme.of(context).textTheme.headlineLarge,
                  ),
                  SizedBox(height: heightScreen * 0.01),
                  Text(
                    description,
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                  SizedBox(
                    height: heightScreen * 0.02,
                  ),
                  ClipRRect(
                    child: Image.asset(
                      image,
                      fit: BoxFit.cover,
                      height: heightScreen * 0.3,
                      scale: 1,
                    ),
                  ),
                ],
              )
            ],
          )
        : Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                child: Image.asset(
                  image,
                  fit: BoxFit.cover,
                  height: heightScreen * 0.3,
                  scale: 1,
                ),
              ),
              SizedBox(
                height: heightScreen * 0.07,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: Theme.of(context).textTheme.headlineLarge,
                  ),
                  SizedBox(height: heightScreen * 0.01),
                  Text(
                    description,
                    style: Theme.of(context).textTheme.bodyLarge,
                  )
                ],
              ),
            ],
          );
  }
}
