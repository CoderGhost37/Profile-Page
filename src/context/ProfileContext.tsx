import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { resumeData } from '@/constant/data';

interface Profile {
  name: string;
  profilePic: string;
  bio: string;
  location: string;
  gender: string;
  dob: string;
  followers: number;
  following: number;
  xp: number;
  badges: string[];
  followersFollowingVisible: boolean;
  xpVisible: boolean;
  badgesVisible: boolean;
}

interface Socials {
  githubUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  dribbbleUrl: string;
  behanceUrl: string;
}

interface Resume {
  about: string;
  workExp: {
    icon: string;
    name: string;
    location: string;
    company: string;
    duration: string;
    desc?: string;
    responsibilities?: string[];
  }[];
  education: {
    img: string;
    name: string;
    location: string;
    degree?: string;
    duration: string;
    desc?: string;
  }[];
  interests: string[];
}

const defaultProfile: Profile = {
  name: 'Elon Musk',
  profilePic: '/images/profile-img.jpg',
  bio: 'Full stack dev at codedamn | Harvard"22',
  location: 'Mumbai, India',
  gender: 'Male',
  dob: '1999-01-01',
  followers: 100,
  following: 10,
  xp: 1000,
  badges: [
    'HTML5',
    'CSS3',
    'Javascript',
    'React',
    'Python',
    'C++',
    'Java',
    'Mongo',
    'NodeJs',
  ],
  followersFollowingVisible: false,
  xpVisible: false,
  badgesVisible: true,
};

const defaultSocials: Socials = {
  githubUrl: '',
  linkedinUrl: '',
  facebookUrl: '',
  instagramUrl: '',
  dribbbleUrl: '',
  behanceUrl: '',
};

const defaultResume: Resume = {
  about: resumeData.about,
  workExp: resumeData.workExperience,
  education: resumeData.education,
  interests: resumeData.interests,
};

interface ProfileContextProps {
  profile: Profile;
  socials: Socials;
  resume: Resume;
  updateProfile: (updatedProfile: Profile) => void;
  updateSocials: (updatedSocials: Socials) => void;
  updateResume: (updatedResume: Resume) => void;
}

const ProfileContext = createContext<ProfileContextProps>({
  profile: defaultProfile,
  socials: defaultSocials,
  resume: defaultResume,
  updateProfile: function (): void {
    throw new Error('Function not implemented.');
  },
  updateSocials: function (): void {
    throw new Error('Function not implemented.');
  },
  updateResume: function (): void {
    throw new Error('Function not implemented.');
  },
});

export const useProfile = () => {
  return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [socials, setSocials] = useState<Socials>(defaultSocials);
  const [resume, setResume] = useState<Resume>(defaultResume);

  useEffect(() => {
    const profileData = localStorage.getItem('profile');
    const socialsData = localStorage.getItem('socials');
    const resumeData = localStorage.getItem('resume');
    if (profileData) setProfile(JSON.parse(profileData));
    if (socialsData) setSocials(JSON.parse(socialsData));
    if (resumeData) setResume(JSON.parse(resumeData));
  }, []);

  const updateProfile = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
    localStorage.setItem('profile', JSON.stringify(updatedProfile));
  };

  const updateSocials = (updatedSocials: Socials) => {
    setSocials(updatedSocials);
    localStorage.setItem('socials', JSON.stringify(updatedSocials));
  };

  const updateResume = (updatedResume: Resume) => {
    setResume(updatedResume);
    localStorage.setItem('resume', JSON.stringify(updatedResume));
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        socials,
        resume,
        updateProfile,
        updateSocials,
        updateResume,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
