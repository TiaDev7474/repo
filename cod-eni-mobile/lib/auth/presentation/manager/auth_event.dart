part of 'auth_bloc.dart';

abstract class AuthEvent extends Equatable {
  const AuthEvent();
}

class Login extends AuthEvent{

  final String email;
  final String password;

  const Login({required this.email, required this.password});

  @override
  List<Object?> get props => [email, password];

}

class SignUp extends AuthEvent{

  final String email;
  final String password;
  final String username;

  const SignUp({required this.email, required this.password, required this.username});@override
  List<Object?> get props => [email, password, username];

}
