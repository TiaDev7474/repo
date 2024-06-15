import 'dart:convert';
import 'package:cod_eni_mobile/auth/domain/auth_reposiitory.dart';
import 'package:http/http.dart' as http;

class AuthRepositoryImplementation implements AuthRepository {
  final String baseUrl = 'https://example.com/api';
  final http.Client client;
  AuthRepositoryImplementation({required this.client});

  @override
  Future<String> login({required String email, required String password}) async {
    final url = Uri.parse('$baseUrl/login');
    final response = await http.post(
      url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': email,
        'password': password,
      }),
    );

    if (response.statusCode == 200) {
      return response.body;
    } else {
      throw Exception('Failed to login');
    }
  }

  @override
  Future<String> signUp({required String email, required String password, required String username}) async {
    final url = Uri.parse('$baseUrl/signup');
    final response = await http.post(
      url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': email,
        'password': password,
        'username': username,
      }),
    );

    if (response.statusCode == 200) {
      return response.body;
    } else {
      throw Exception('Failed to sign up');
    }
  }
}
