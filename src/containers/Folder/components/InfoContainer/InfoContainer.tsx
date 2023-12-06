import * as S from './InfoContainer.style';
import useModal from '@/hooks/useModal';
import { Folder } from '@/types/Folder.types';
import { IconDelete, IconEdit, IconShare } from '@/public/svgs';

interface Props {
  defaultFolder: Folder;
  selectedFolder: Folder;
  userId: number;
}

function InfoContainer({ defaultFolder, selectedFolder, userId }: Props) {
  const [modal, setModal] = useModal({
    userId: userId,
    folderName: selectedFolder?.name,
    folderId: selectedFolder?.id,
  });

  return (
    <>
      <S.InfoContainer>
        <S.FolderTitle>{selectedFolder?.name}</S.FolderTitle>
        <S.SettingButtonContainer>
          {selectedFolder?.id !== defaultFolder.id && (
            <>
              <S.SettingButton onClick={() => setModal('share')}>
                <IconShare />
                공유
              </S.SettingButton>
              <S.SettingButton onClick={() => setModal('edit')}>
                <IconEdit />
                이름 변경
              </S.SettingButton>
              <S.SettingButton onClick={() => setModal('deleteFolder')}>
                <IconDelete />
                삭제
              </S.SettingButton>
            </>
          )}
        </S.SettingButtonContainer>
      </S.InfoContainer>
      {modal}
    </>
  );
}

export default InfoContainer;
