"use client"
import React, { useState } from 'react';
import { Search } from './search';
const MainNavSearch: React.FC = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>('');
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <div>
      <Search
        selectedPlaceId={selectedPlaceId}
        setSelectedPlaceId={setSelectedPlaceId}
        setIsOpenDialog={setIsOpenDialog}
        showInlineError={true}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder="Search for a place"
      />
      {isOpenDialog && (
        <div>
          <p>Selected Place ID: {selectedPlaceId}</p>
          <button onClick={() => setIsOpenDialog(false)}>Close Dialog</button>
        </div>
      )}
    </div>
  );
};

export default MainNavSearch;