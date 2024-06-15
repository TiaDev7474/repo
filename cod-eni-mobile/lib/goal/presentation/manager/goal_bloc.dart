import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

part 'goal_event.dart';
part 'goal_state.dart';

class GoalBloc extends Bloc<ExampleEvent, GoalState> {
  GoalBloc() : super(GoalInitial()) {
    on<ExampleEvent>((event, emit) {
      // TODO: implement event handler
    });
  }
}
