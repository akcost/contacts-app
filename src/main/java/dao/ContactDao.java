package dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import model.Contact;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ContactDao {

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public Contact save(Contact contact) {
        if (contact.getId() == null) {
            em.persist(contact);
        } else {
            em.merge(contact);
        }

        return contact;
    }

    public List<Contact> findAll() {
        return em.createQuery("select p from Contact p").getResultList();
    }

    public Contact findContactById(Long id) {
        return em.find(Contact.class, id);
    }

    @Transactional
    public void deleteContactById(Long id) {
        Contact contact = em.find(Contact.class, id);

        if (contact != null) {
            em.remove(contact);
        }
    }
}
