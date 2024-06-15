abstract class AuthRepository{
  Future<String> login({required String email, required String password});
  Future<String> signUp({required String email, required String password,required String username});
}