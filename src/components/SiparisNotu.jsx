import { FormGroup, Input, Label } from "reactstrap";

export default function SiparisNotu() {
    return (
        <div className="siparisnotu">
            <FormGroup>
                <Label for="SiparisNotu">
                    Sipariş Notu
                </Label>
                <Input
                    id="SiparisNotu"
                    name="note"
                    type="textarea"
                    rows="3"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    style={{
                        height: "40px",
                        backgroundColor: "#FAF7F2",
                        borderRadius: "5px",
                        fontSize: "12px",
                        marginTop: "10px"
                    }}
                />
            </FormGroup>
        </div>
    );
}

