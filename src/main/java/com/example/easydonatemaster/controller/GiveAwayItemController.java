package com.example.easydonatemaster.controller;

import com.example.easydonatemaster.entites.GiveAwayItem;
import com.example.easydonatemaster.services.IGiveAwayItemService;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class GiveAwayItemController {

    IGiveAwayItemService iGiveAwayItemService;

    public GiveAwayItemController(IGiveAwayItemService iGiveAwayItemService) {
        this.iGiveAwayItemService = iGiveAwayItemService;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/giveawayItems/add")
    public GiveAwayItem addGiveAwayItem(@RequestBody GiveAwayItem giveAwayItem) {
        
        return iGiveAwayItemService.addGiveAwayItem(giveAwayItem);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/giveawayItems/list")
    public List<GiveAwayItem> listGiveAwayItem() {
        return iGiveAwayItemService.listGiveAwayItem();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/giveawayItems/modify/{id}")
    public GiveAwayItem modifyGiveAwayItem(@PathVariable int id, @RequestBody GiveAwayItem giveAwayItem) {
        return iGiveAwayItemService.modifyGiveAwayItem(id, giveAwayItem);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/giveawayItems/findById/{id}")
    public GiveAwayItem findGiveAwayItemById(@PathVariable int id) {
        return iGiveAwayItemService.findGiveAwayItemById(id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/giveawayItems/delete/{id}")
    public void deleteGiveAwayItem(@PathVariable int id){
        iGiveAwayItemService.deleteGiveAwayItem(id);
    }

}
