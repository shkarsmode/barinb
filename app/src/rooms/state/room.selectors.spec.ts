import * as fromRoom from './room.reducer';
import { selectRoomState } from './room.selectors';

describe('Room Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRoomState({
      [fromRoom.roomFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
