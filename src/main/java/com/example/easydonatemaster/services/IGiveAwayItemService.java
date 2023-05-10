package com.example.easydonatemaster.services;

import com.example.easydonatemaster.entites.GiveAwayItem;

import java.util.List;

public interface IGiveAwayItemService {

    public GiveAwayItem addGiveAwayItem (GiveAwayItem giveAwayItem);
    public GiveAwayItem modifyGiveAwayItem(int id, GiveAwayItem giveAwayItem);
    public void deleteGiveAwayItem(int id);
    public List<GiveAwayItem> listGiveAwayItem();
    public GiveAwayItem findGiveAwayItemById(int id);

}
