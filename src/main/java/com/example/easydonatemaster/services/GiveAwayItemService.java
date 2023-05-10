package com.example.easydonatemaster.services;

import com.example.easydonatemaster.entites.GiveAwayItem;
import com.example.easydonatemaster.repositories.GiveAwayItemRepositoy;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GiveAwayItemService implements IGiveAwayItemService {

    GiveAwayItemRepositoy giveAwayItemRepositoy;
    @Override
    public GiveAwayItem addGiveAwayItem(GiveAwayItem giveAwayItem) {
        return giveAwayItemRepositoy.save(giveAwayItem);
    }

    @Override
    public GiveAwayItem modifyGiveAwayItem(int id, GiveAwayItem modifiedItem) {
        // Recherche de l'élément à modifier dans la base de données
        java.util.Optional<GiveAwayItem> optionalItem = giveAwayItemRepositoy.findById(id);

        // Vérification si l'élément existe
        if (optionalItem.isPresent()) {
            GiveAwayItem item = optionalItem.get();
            // Mise à jour des propriétés de l'élément avec les nouvelles valeurs fournies
            item.setTitle(modifiedItem.getTitle());
            item.setDescription(modifiedItem.getDescription());
            item.setProductName(modifiedItem.getProductName());
            item.setAvailability(modifiedItem.isAvailability());
            item.setPickUpLocation(modifiedItem.getPickUpLocation());
            // Enregistrement des modifications dans la base de données
            giveAwayItemRepositoy.save(item);
            return item;
        } else {
            // Si l'élément n'est pas trouvé, retourne null ou lance une exception, selon le choix de conception
            return null;
            // ou bien, lancer une exception ElementNotFoundException : 
            // throw new ElementNotFoundException("GiveAwayItem not found with id " + id);
        }
    }

    @Override
    public void deleteGiveAwayItem(int id) {
        giveAwayItemRepositoy.deleteById(id);
    }

    @Override
    public List<GiveAwayItem> listGiveAwayItem() {
        return giveAwayItemRepositoy.findAll();
    }

    @Override
    public GiveAwayItem findGiveAwayItemById(int id) {
        return giveAwayItemRepositoy.findById(id).orElse(null);
    }


}
