export const MMBorderColorControlWithQuality = quality => {
  switch (quality) {
    case 0:
      return '#afaeae';
    case 1:
      return '#764027';
    case 2:
      return '#52A346';
    case 3:
      return '#FD8002';
    case 4:
      return '#001388';
    case 5:
      return '#6F007F';
    default:
      break;
  }
};

export const MMBorderColorControlForPieceItem = NFTPieceType => {
  switch (NFTPieceType) {
    case 0:
      return '#4d7c10';
    case 1:
      return '#1150a3';
    case 2:
      return '#666b75';
    case 3:
      return '#841717';
    default:
      break;
  }
};
