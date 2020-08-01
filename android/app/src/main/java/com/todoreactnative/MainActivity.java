package com.todoreactnative;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // import this
import android.os.Bundle; // import this


public class MainActivity extends ReactActivity {

    // Add this method.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      //this, R.style.SplashTheme taken from repo, for changing status bar color.
      //This also prevents the app from fading in.
        SplashScreen.show(this, R.style.SplashTheme);
        super.onCreate(savedInstanceState);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ToDoReactNative";
  }
}
