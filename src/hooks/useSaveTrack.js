import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, track_name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(track_name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
