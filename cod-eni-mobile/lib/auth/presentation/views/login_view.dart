
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:local_auth/local_auth.dart';

class LoginView extends StatefulWidget {
  const LoginView({super.key});

  @override
  State<LoginView> createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  late final LocalAuthentication auth;
  bool _supportState = false;

  @override
  void initState(){
    super.initState();
    auth = LocalAuthentication();
    auth.isDeviceSupported().then((bool isSupported) =>
      setState((){
        _supportState = isSupported;
      })
    );
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      body: SafeArea(
        child: Container(
          color: Theme.of(context).colorScheme.background,
          child: Column(
            children: [
              _supportState ? const Text("This device is supported"): const Text("This device is not supported"),
              ElevatedButton(onPressed: _getAvailableBiometrics, child: const Text("get available biometrics",style: TextStyle(color: Colors.black))),
              ElevatedButton(onPressed: _authenticate, child: const Text("Test",style: TextStyle(color: Colors.black),)),
            ],
          ),
        ) ,
      )
    );
  }

  Future<void> _authenticate()async{
    try{
      bool authenticated = await auth.authenticate(
          localizedReason: "Je test tokony mandeha",
        options: const AuthenticationOptions(
          stickyAuth: true,
          biometricOnly: true,
        )
      );
      print("Authenticated: $authenticated");
    }on PlatformException catch(e){
      print(e);
    }
  }

  Future<void> _getAvailableBiometrics()async{
     List<BiometricType> available =  await auth.getAvailableBiometrics();
     print("List of availableBiometrics: $available");
     if(!mounted){
       return;
     }
  }

}

