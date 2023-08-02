package app;

import dao.ContactDao;
import jakarta.validation.Valid;
import model.Contact;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ContactController {

    private ContactDao dao;

    public ContactController(ContactDao dao) {
        this.dao = dao;
    }


    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return dao.findAll();
    }

    @GetMapping("/contacts/{id}")
    public Contact getContactById(@PathVariable Long id) {
        return dao.findContactById(id);
    }

    @PostMapping("/contacts")
    @ResponseStatus(HttpStatus.CREATED)
    public Contact save(@RequestBody @Valid Contact contact) {
        return dao.save(contact);
    }

    @DeleteMapping("/contacts/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteContactById(@PathVariable Long id) {
        dao.deleteContactById(id);
    }
}