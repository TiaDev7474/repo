part of 'example_bloc.dart';

abstract class ExampleState extends Equatable {
  const ExampleState();
}

class Empty extends  ExampleState{
  @override
  List<Object> get props => [];
}

class Loaded extends ExampleState{
  @override
  List<Object?> get props => [];

}


class Loading extends ExampleState{
  @override
  List<Object?> get props => [];
}


class ErrorState extends ExampleState{
  final String message;
  const ErrorState({required this.message});
  @override
  List<Object?> get props => [message];
}
