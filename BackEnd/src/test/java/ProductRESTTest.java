import com.tngtech.java.junit.dataprovider.DataProvider;
import com.tngtech.java.junit.dataprovider.DataProviderRunner;
import com.tngtech.java.junit.dataprovider.UseDataProvider;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

public class ProductRESTTest {

    @BeforeClass
    public static void setup() {
        RestAssured.port = Integer.valueOf(8080);
        RestAssured.baseURI = "http://localhost";
        RestAssured.basePath = "";
    }


    @Test

    public void getProductTest() {
        given() .when().post("/products?productnumber=1234&productname='breaker'").then()
                .statusCode(200);

        given().relaxedHTTPSValidation("TLSv1.2")
                .when()
                .get("products/1234")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("productname",equalTo("breaker"));
        given()
                .when()
                .delete("products/1234");
        }


    @Test
    @UseDataProvider("mydata")
    public void getUserTest() {
        given() .when().post("/user?phone=1234&firstName='Addisu'&lastName='Alemu'").then()
                .statusCode(200);

        given().relaxedHTTPSValidation("TLSv1.2")
                .when()
                .get("user/1234")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("firstName",equalTo("Addisu"))
                .body("lastName",equalTo("Alemu"))
                .body("phone",equalTo("1234"));
        given()
                .when()
                .delete("products/1234");
    }





    @Test
    @UseDataProvider("mydata")
    public void deleteProductTest() {
        given() .when().post("/products?productnumber=1234&productname='breaker'").then()
                .statusCode(200);
        given()
                .when()
                .delete("products/1234");

        given()
                .when()
                .get("products/1234")
                .then()
                .statusCode(404)
                .and()
                .body("errorMessage",equalTo("product with number= 667 is not available"));
        }



}
@RunWith(DataProviderRunner.class)
 class RestTest {
    @DataProvider
    public static Object[][] mydata() {
        return new Object[][]{
                {"12", "Cable"},
                {"122", "Desk"},
                {"9", "9"},
                {"5", "TV set"}
        };
    }
}