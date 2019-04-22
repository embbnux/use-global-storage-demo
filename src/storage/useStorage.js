import useGlobalStorage from 'use-global-storage';

const useStorage = useGlobalStorage({
  storageOptions: { name: 'test-db' }
});

export default useStorage;
