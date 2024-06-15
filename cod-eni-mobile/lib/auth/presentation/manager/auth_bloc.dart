import 'dart:async';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import '../../domain/auth_reposiitory.dart';

part 'auth_event.dart';
part 'auth_state.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final AuthRepository authRepository;
  AuthBloc(this.authRepository) : super(Empty()) {
    on<Login>(_onLogin);
    on<SignUp>(_onSignUp);
  }
  Future<void> _onLogin(Login event, Emitter<AuthState> emit) async {
    emit(Loading());
    try {
      final response = await authRepository.login(email: event.email, password: event.password);
      emit(Loaded());
    } catch (e) {
      emit(ErrorState(message: e.toString()));
    }
  }

  Future<void> _onSignUp(SignUp event, Emitter<AuthState> emit) async {
    emit(Loading());
    try {
      final response = await authRepository.signUp(email: event.email, password: event.password, username: event.username);
      emit(Loaded());
    } catch (e) {
      emit(ErrorState(message: e.toString()));
    }
  }
}
