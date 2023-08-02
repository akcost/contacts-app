package app;

import dao.ContactDao;
import model.Contact;
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
}