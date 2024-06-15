import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/constants/route_path.dart';
import '../widgets/signup_form.dart';


class SignupView extends StatelessWidget {
  const SignupView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: const Icon(
              Icons.arrow_back,
              color: Colors.black,
              weight: 2,
            ),
            onPressed: () => GoRouter.of(context).pop(),
          ),
          title: Text(
            'Créer un compte',
            style: Theme.of(context)
                .textTheme
                .titleLarge
                ?.copyWith( fontSize: 22),
          ),
        ),
        body: SafeArea(
          child: SingleChildScrollView(
            child: Container(
              color: Theme.of(context).colorScheme.background,
              child: Padding(
                padding: const EdgeInsets.all(22.0),
                child: Column(
                  children: [
                    Text(
                      'Inscrivez-vous maintenant, et controler l’état de votre poketra .',
                      style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                        color: Theme.of(context).colorScheme.onBackground,
                        fontWeight: FontWeight.w500
                      ),
                    ),
                    const SignupForm(),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                                "Avez-vous déjà un compte ?",
                              style: Theme.of(context).textTheme.titleMedium,
                            ),
                            TextButton(
                                onPressed: () {
                                  context.pushReplacement(RoutePath.goals);
                                },
                                child: Text(
                                    "Se connecter",
                                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                                    decoration: TextDecoration.underline
                                  ),
                                ),)
                          ],
                        )
                      ],
                    )

                  ],
                ),
              ),
            ),
          ),
        ));
  }
}
