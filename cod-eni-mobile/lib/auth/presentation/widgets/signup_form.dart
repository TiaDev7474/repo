import 'package:flutter/material.dart';

import '../views/starting_view.dart';


class SignupForm extends StatelessWidget {
  const SignupForm({super.key});

  @override
  Widget build(BuildContext context) {
    final GlobalKey<FormState> formKey = GlobalKey<FormState>();
    String password = '';
    String email = '';
    String username = '';

    void submitForm() {
      if (formKey.currentState!.validate()) {
        formKey.currentState!.save(); // Save the form data
        print('Password: $password'); // Print the password
        print('Email: $email');
        print('Username: $username');
      }
    }

    void onSavedPasswordValue(String? value){
       password = value!;
    }

    return Form(
      key: formKey,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 24.0),
        child: Column(
          children: [
            TextFormField(
              validator: (value){
                 if(value!.isEmpty) {
                   return 'Ce champ est obligatoire. Veuillez le completer.';
                 }
                 return null;
              },
              onSaved: (value){
                username = value!;
              },
              decoration: const InputDecoration(
                hintText: "Nom d'utilisateur",
                prefixIcon: Icon(
                  Icons.person_outline_rounded,
                ),
              ),
            ),
            const SizedBox(
              height: 12.0,
            ),
            TextFormField(
              validator: validateEmail,
              onSaved: (value){
                email = value!;
              },
              decoration: const InputDecoration(
                hintText: "Addresse email",
                prefixIcon: Icon(
                  Icons.alternate_email_outlined,
                ),
              ),
              keyboardType: TextInputType.emailAddress,
              textInputAction: TextInputAction.done,
            ),
            const SizedBox(
              height: 12.0,
            ),
            PasswordInputField(onSaved: onSavedPasswordValue,),
            const SizedBox(
              height: 32.0,
            ),
            CustomButton(
              label: "Créer un compte",
              onPressed: submitForm,
              type: ButtonType.primary,
            ),
          ],
        ),
      ),
    );
  }
}

class PasswordInputField extends StatefulWidget {
  final void Function(String? value) onSaved;
  const PasswordInputField({super.key, required this.onSaved});

  @override
  State<PasswordInputField> createState() => _PasswordInputFieldState();
}

class _PasswordInputFieldState extends State<PasswordInputField> {

  bool isVisible = false;
  void _toggleInputVisibility() {
    setState(() {
      isVisible = !isVisible;
    });
  }

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      validator: _validatePassword,
      onSaved: widget.onSaved,
      obscureText: isVisible,
      decoration: InputDecoration(
        hintText: "Mot de passe",
        prefixIcon: const Icon(Icons.lock_outline_rounded),
        suffixIcon: IconButton(
            onPressed: _toggleInputVisibility,
            icon: isVisible
                ? const Icon(Icons.visibility_outlined)
                : const Icon(Icons.visibility_off_outlined)),
      ),
    );
  }
}



//Todo: move these functions into utils folder
String? validateEmail(String? value) {
  const pattern = r"(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'"
      r'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-'
      r'\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*'
      r'[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4]'
      r'[0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9]'
      r'[0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\'
      r'x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])';
  final regex = RegExp(pattern);

  return value!.isNotEmpty && !regex.hasMatch(value)
      ? 'Veuillez Entrer une addresse email valide.'
      :  value.isEmpty ? 'Ce champ est obligatoire. Veuillez le completer.' : null;
}

String? _validatePassword(String? value) {
  if (value == null || value.isEmpty) {
    return 'Le mot de passe ne peut pas être vide';
  }
  // Vérifiez si le mot de passe contient au moins 8 caractères
  if (value.length < 8) {
    return 'Le mot de passe doit contenir au moins 8 caractères';
  }
  // Vérifiez si le mot de passe contient au moins un chiffre
  if (!RegExp(r'[0-9]').hasMatch(value)) {
    return 'Le mot de passe doit contenir au moins un chiffre';
  }
  // Vérifiez si le mot de passe contient au moins un caractère spécial
  if (!RegExp(r'[!@#$%^&*(),.?":{}|<>]').hasMatch(value)) {
    return 'Le mot de passe doit contenir au moins un caractère spécial';
  }
  // Le mot de passe est valide
  return null;
}

