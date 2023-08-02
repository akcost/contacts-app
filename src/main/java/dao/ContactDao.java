package dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import model.Contact;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ContactDao {

    @PersistenceContext
    private EntityManager em;

    public List<Contact> findAll() {
        return em.createQuery("select p from Contact p").getResultList();
    }
}
