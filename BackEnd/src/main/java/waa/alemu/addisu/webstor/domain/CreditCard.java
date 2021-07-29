package waa.alemu.addisu.webstor.domain;

import java.util.Date;

public class CreditCard {
    private String type;
    private Long number;
    private String validDate;
    private int validationCode;

    public CreditCard() {
    }

    public CreditCard(String type, Long number, String validDate, int validationCode) {
        this.type = type;
        this.number = number;
        this.validDate = validDate;
        this.validationCode = validationCode;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public String getValidDate() {
        return validDate;
    }

    public void setValidDate(String validDate) {
        this.validDate = validDate;
    }

    public int getValidationCode() {
        return validationCode;
    }

    public void setValidationCode(int validationCode) {
        this.validationCode = validationCode;
    }
}