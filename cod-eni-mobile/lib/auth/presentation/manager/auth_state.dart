part of 'auth_bloc.dart';

abstract class AuthState extends Equatable {
  const AuthState();
}

class Empty extends AuthState {
  @override
  List<Object> get props => [];
}

class Loaded extends AuthState{
  @override
  List<Object?> get props => [];

}


class Loading extends AuthState{
  @override
  List<Object?> get props => [];
}


class ErrorState extends AuthState{
  final String message;
  const ErrorState({required this.message});
  @override
  List<Object?> get props => [message];
}
