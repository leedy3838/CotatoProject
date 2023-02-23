package cotato.service;

import cotato.dto.UserDto;
import cotato.dto.UserInfoDto;

import java.util.List;

public interface UserService {
    UserDto saveUser(UserDto userDto);
    void checkUserValid();
    void checkAdmin();
    void logoutProcess();
    void setAuthentication();
    UserInfoDto getUserInfo();
    void modifyUserPassword(UserInfoDto userInfoDto);
    void modifyUserInfo(UserInfoDto userInfoDto);
    List<UserInfoDto> findAllUsers();
}
