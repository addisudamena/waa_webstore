import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.BeforeClass;
import org.junit.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.CoreMatchers.*;

public class BankAccountRESTTest {

    @BeforeClass
    public static void setup() {
        RestAssured.port = Integer.valueOf(8080);
        RestAssured.baseURI = "http://localhost";
        RestAssured.basePath = "";
    }

    @Test
    public void testGetOneAccount() {
        // add the account to be fetched
        given()
                .when().post("/accounts?accountNumber=667&accountHolder='Joe Smith'").then()
                .statusCode(200);
        // test getting the book
        given()
                .when()
                .get("accounts/667")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("accountnumber",equalTo(667))
                .body("accountHolder",equalTo("Joe Smith"))
                .body("balance",equalTo(0.0f));
        //cleanup
        given()
                .when()
                .delete("accounts/667");
    }

    @Test
    public void testDeleteAccount() {
        // create the account to be deleted
        given()
                .when().post("/accounts?accountNumber=667&accountHolder='Joe Smith'").then()
                .statusCode(200);
        //delete account
        given()
                .when()
                .delete("accounts/667");
        //verify if it is deleted
        given()
                .when()
                .get("accounts/667")
                .then()
                .statusCode(404)
                .and()
                .body("errorMessage",equalTo("Account with number= 667 is not available"));
    }

    @Test
    public void testCreateAccount() {
        // creat the account to deposit to
        given()
                .when().post("/accounts?accountNumber=667&accountHolder='Joe Smith'").then()
                .statusCode(200);
        //verify account
        given()
                .when()
                .get("accounts/667")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("accountnumber",equalTo(667))
                .body("accountHolder",equalTo("Joe Smith"))
                .body("balance",equalTo(0.0f));
        //cleanup
        given()
                .when()
                .delete("accounts/667");

    }

    @Test
    public void testDepositAccount() {
        // create the account to deposit to
        given()
                .when().post("/accounts?accountNumber=667&accountHolder='Joe Smith'").then()
                .statusCode(200);
        //deposit to this account
        given()
                .when().post("/accounts?accountNumber=667&operation='deposit'&amount=122.25").then()
                .statusCode(200);
        //verify balance
        given()
                .when()
                .get("accounts/667")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("accountnumber",equalTo(667))
                .body("accountHolder",equalTo("Joe Smith"))
                .body("balance",equalTo(122.25f));
        //cleanup
        given()
                .when()
                .delete("accounts/667");

    }

    @Test
    public void testWithdrawAccount() {
        // create the account to deposit to
        given()
                .when().post("/accounts?accountNumber=667&accountHolder='Joe Smith'").then()
                .statusCode(200);
        //withdraw from this account
        given()
                .when().post("/accounts?accountNumber=667&operation='withdraw'&amount=122.25").then()
                .statusCode(200);
        //verify balance
        given()
                .when()
                .get("accounts/667")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("accountnumber",equalTo(667))
                .body("accountHolder",equalTo("Joe Smith"))
                .body("balance",equalTo(-122.25f));
        //cleanup
        given()
                .when()
                .delete("accounts/667");

    }

}
