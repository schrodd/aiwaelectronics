import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

export default function SearchButton({large, closeModal}){
  return (
    <button className='buscar' onClick={closeModal}>
      <Link href='/buscar' legacyBehavior>
        <SearchIcon fontSize={`${large?'large':'medium'}`}/>
      </Link>
    </button>
  );
}