import * as S from './AddLinkContainer.style';
import { useState } from 'react';
import useModal from '@hooks/useModal';
import AddToFolder from '@components/Modal/AddToFolder';
import LINK from '@assets/icons/link.svg';

function AddLinkContainer({ userId }: { userId: number }) {
  const [url, setUrl] = useState('');

  const [toggleShow, Modal] = useModal({
    addToFolder: <AddToFolder url={url} userId={userId} />,
  });

  return (
    <S.Container>
      {Modal}
      <S.Inner>
        <S.Img src={LINK} alt='링크 아이콘' />
        <S.Input
          placeholder='링크를 추가해 보세요'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <S.ButtonContainer>
          <S.SmallButton
            type='button'
            onClick={() => toggleShow('addToFolder')}
          >
            추가하기
          </S.SmallButton>
        </S.ButtonContainer>
      </S.Inner>
    </S.Container>
  );
}

export default AddLinkContainer;