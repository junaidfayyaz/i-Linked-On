import React from 'react'
import './find.css'
const Find = () => {
  return (
      <div>
          <section id="find-section">
            <div class="holder">
                <form class="find-form" action="#">
                    <label>Find a colleague</label>
                    <div class="find-input-fields">
                        <div class="row">
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                            <input type="submit" value="Search"/>
                        </div>
                        <div class="row">
                            <span class="ilinkedon-logo-white"></span>
                            <span class="member-text">member directory:</span>
                            <ul class="alphabet-list">
                                <li><a href="#">a</a></li>
                                <li><a href="#">b</a></li>
                                <li><a href="#">c</a></li>
                                <li><a href="#">d</a></li>
                                <li><a href="#">e</a></li>
                                <li><a href="#">f</a></li>
                                <li><a href="#">g</a></li>
                                <li><a href="#">h</a></li>
                                <li><a href="#">i</a></li>
                                <li><a href="#">j</a></li>
                                <li><a href="#">k</a></li>
                                <li><a href="#">l</a></li>
                                <li><a href="#">m</a></li>
                                <li><a href="#">n</a></li>
                                <li><a href="#">o</a></li>
                                <li><a href="#">p</a></li>
                                <li><a href="#">q</a></li>
                                <li><a href="#">r</a></li>
                                <li><a href="#">s</a></li>
                                <li><a href="#">t</a></li>
                                <li><a href="#">u</a></li>
                                <li><a href="#">v</a></li>
                                <li><a href="#">w</a></li>
                                <li><a href="#">x</a></li>
                                <li><a href="#">y</a></li>
                                <li><a href="#">z</a></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Find